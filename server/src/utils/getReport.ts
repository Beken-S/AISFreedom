import puppeteer = require('puppeteer');

import { AddProgramsRequest, Department } from '../models';
import {
  AddProgramRequestFilterParams,
  AddProgramRequestStatus,
} from '../types';

async function getCaptionDateRange(from?: Date, to?: Date): Promise<string> {
  if (from != null && to == null) {
    return `
      <span id="data-range">
        c ${from.toLocaleDateString('ru-Ru')}
        по ${new Date().toLocaleDateString('ru-Ru')}
      </span>
    `;
  }
  if (from == null && to != null) {
    return `
    <span id="data-range">
    до ${to.toLocaleDateString('ru-Ru')}
    </span>
    `;
  }
  if (from != null && to != null) {
    return `
      <span id="data-range">
      c ${from.toLocaleDateString('ru-Ru')}
      по ${to.toLocaleDateString('ru-Ru')}
      </span>
      `;
  }
  return '<span id="data-range"> за весь период </span>';
}

async function getCaptionHeaderMainLine(
  status?: AddProgramRequestStatus
): Promise<string> {
  switch (status) {
    case 'current':
      return 'Отчет по рассматриваемым заявкам <br />';
    case 'completed':
      return 'Отчет по выполненным заявкам <br />';
    case 'rejected':
      return 'Отчет по отклоненным заявкам <br />';
    case 'expired':
      return 'Отчет по просроченным заявкам <br />';
    default:
      return 'Отчет по поданным заявкам <br />';
  }
}

async function getDataRows(
  requests: AddProgramsRequest[],
  departments: Department[]
): Promise<string> {
  const departmentsMap = departments.reduce<{
    [key: number]: string;
  }>((acc, { id, name }) => ({ ...acc, [id]: name }), {});

  return requests
    .map((request) => {
      const {
        id,
        creation_date,
        consider_before_date,
        processed_date,
        programs_names,
        department_id,
        username,
        user_position,
        user_email,
        user_phone,
        adding_reason,
        status,
        comment,
      } = request.get({
        plain: true,
      });

      return `
      <tr>
        <td>${id}</td>
        <td>
          ${creation_date.toLocaleDateString('ru-Ru')}
          <br/>
          (${consider_before_date.toLocaleDateString('ru-Ru')})
        </td>
        <td>${programs_names.join(',')}</td>
        <td>
          ${departmentsMap[department_id]}
          <hr/>
          ${username};<br/>${user_position};<br/>${user_phone};<br/>${user_email}
        </td>
        <td>${adding_reason}</td>
        <td>${status}</td>
        <td>
          ${
            processed_date != null
              ? processed_date.toLocaleDateString('ru-Ru')
              : '-'
          }
        </td>
        <td>${comment != null ? comment : '-'}</td>
      </tr>
    `;
    })
    .join('');
}

async function getResults(
  requests: AddProgramsRequest[],
  status?: AddProgramRequestStatus
): Promise<string> {
  if (status != null) {
    return `
      <tr id="footer">
        <td colspan="9">
          <span>Итого заявок:</span>
          <ul id="result">
            <li>${requests.length}</li>
          </ul>
        </td>
      </tr>
    `;
  }

  const countRequestByStatus = requests.reduce<{
    [key: string]: number;
  }>((acc, { status }) => {
    switch (status) {
      case 'На рассмотрении':
        return {
          ...acc,
          ['current']: acc['current'] != null ? ++acc['current'] : 1,
        };
      case 'Выполнена':
        return {
          ...acc,
          ['completed']: acc['completed'] != null ? ++acc['completed'] : 1,
        };
      case 'Отклонена':
        return {
          ...acc,
          ['rejected']: acc['rejected'] != null ? ++acc['rejected'] : 1,
        };
      case 'Просрочено исполнение':
        return {
          ...acc,
          ['expired']: acc['expired'] != null ? ++acc['expired'] : 1,
        };
      default:
        return acc;
    }
  }, {});

  return `
    <tr id="footer">
      <td colspan="9">
        <span>Итого заявок:</span>
        <ul id="result">${Object.keys(countRequestByStatus)
          .map((status) => {
            switch (status) {
              case 'current':
                return `<li> на рассмотрении ${countRequestByStatus[status]} шт.</li>`;
              case 'completed':
                return `<li> выполненных ${countRequestByStatus[status]} шт.</li>`;
              case 'rejected':
                return `<li> отклоненных ${countRequestByStatus[status]} шт.</li>`;
              case 'expired':
                return `<li> просроченных ${countRequestByStatus[status]} шт.</li>`;
              default:
                return;
            }
          })
          .join('')}
        </ul>
      </td>
    </tr>
  `;
}

async function getReportMarkup(
  requests: AddProgramsRequest[],
  departments: Department[],
  { status, created_from, created_to }: AddProgramRequestFilterParams
): Promise<string> {
  const [captionMainLine, captionDataRange, dataRows, results] =
    await Promise.all([
      getCaptionHeaderMainLine(status),
      getCaptionDateRange(created_from, created_to),
      getDataRows(requests, departments),
      getResults(requests, status),
    ]);

  return `
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Отчет</title>
      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          color: #212529;
          font-size: 12pt;
          font-family: "lato", sans-serif;
        }

        table {
          width: 275mm;
          font-size: 10pt;
          text-align: center;
          break-after: auto;
          border-collapse: collapse;
        }

        caption {
          margin-bottom: 5mm;
          font-weight: 600;
          font-size: 16pt;
        }

        #data-range {
          font-weight: 400;
          font-size: 16pt;
        }

        #header,
        #footer {
          border: 2pt solid #212529;
        }

        #footer td {
          text-align: left;
        }

        #footer span {
          font-weight: 600;
        }

        tbody {
          border-right: 2pt solid #212529;
          border-left: 2pt solid #212529;
        }

        th,
        td {
          padding: 2.5mm;
          vertical-align: top;
        }

        th:not(:last-child) {
          font-weight: 600;
          border-right: 1pt solid #212529;
        }

        td:not(:last-child) {
          border-right: 1pt solid #212529;
        }

        tr {
          border-bottom: 1pt solid #212529;
          break-inside: avoid;
          break-after: auto;
        }

        tr th:nth-child(1) {
          width: 5%;
        }

        tr th:nth-child(2) {
          width: 8%;
        }

        tr th:nth-child(3) {
          width: 8%;
        }

        tr th:nth-child(4) {
          width: 30%;
        }

        tr th:nth-child(5) {
          width: 18%;
        }

        tr th:nth-child(6) {
          width: 8%;
        }

        tr th:nth-child(7) {
          width: 8%;
        }

        tr th:nth-child(8) {
          width: 15%;
        }

        ul,
        li {
          display: inline;
        }

        ul {
          margin: 0;
          padding-left: 2.5mm;
          list-style: none;
        }

        p {
          margin: 2mm;
        }

        .brake {
          border-top: 1pt solid #212529;
          break-before: page;
        }

        @media print {
          html,
          body {
            width: 277mm;
            height: 180mm;
            color-adjust: exact;
          }
        }

        @page {
          margin: 20mm 10mm 10mm;
          size: landscape;
        }
      </style>
    </head>
    <body>
      <table>
        <caption id="caption">
          ${captionMainLine}
          ${captionDataRange}
        </caption>
        <tr id="header">
          <th>№</th>
          <th>
            Дата создания <br />
            (срок исполнения)
          </th>
          <th>Наименование программы</th>
          <th>
            Объект информатизации
            <hr/>
            Пользователь
          </th>
          <th>Основание</th>
          <th>Статус</th>
          <th>Дата выполнения</th>
          <th>Комментарий</th>
        </tr>
        <tr id="column-number">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          ${dataRows}
          ${results}
        </tr>
      </table>
      <script>
        onload = () => {
          const rows = document.querySelectorAll("tr");
          const countRows = rows.length;
          const caption = document.querySelector("caption");
          const columnNumber = document.getElementById("column-number");
          const numberRow = \`
          <tr class='column-number brake'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
        \`;
          const maxPageHeight = 679;
          let currentPageHeight = caption.offsetHeight;

          for (let i = 0; i < countRows; i++) {
            const row = rows.item(i);
            const isFooter = row.id === "footer";
            currentPageHeight += row.offsetHeight;
            if (currentPageHeight >= maxPageHeight) {
              if (isFooter) {
                rows.item(i - 1).insertAdjacentHTML("beforebegin", numberRow);
              } else {
                row.insertAdjacentHTML("beforebegin", numberRow);
                currentPageHeight = 40 + row.offsetHeight;
              }
            }
          }
        };
      </script>
    </body>
  </html>
  `;
}

async function getReport(
  requests: AddProgramsRequest[],
  departments: Department[],
  filter: AddProgramRequestFilterParams
) {
  const minimal_args = [
    '--autoplay-policy=user-gesture-required',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-domain-reliability',
    '--disable-extensions',
    '--disable-features=AudioServiceOutOfProcess',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-offer-store-unmasked-wallet-cards',
    '--disable-popup-blocking',
    '--disable-print-preview',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-setuid-sandbox',
    '--disable-speech-api',
    '--disable-sync',
    '--hide-scrollbars',
    '--ignore-gpu-blacklist',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-first-run',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--password-store=basic',
    '--use-gl=swiftshader',
    '--use-mock-keychain',
  ];
  const [report, browser] = await Promise.all([
    getReportMarkup(requests, departments, filter),
    puppeteer.launch({
      product: 'firefox',
      headless: true,
      args: minimal_args,
      timeout: 0,
    }),
  ]);

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setContent(report.toString(), { waitUntil: 'domcontentloaded' });

  return page.pdf({
    scale: 1,
    format: 'A4',
    landscape: true,
    displayHeaderFooter: false,
  });
}

export default getReport;
