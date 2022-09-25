import { SequelizeOptions } from 'sequelize-typescript';

type ServerConfig = {
  isDevelopmentMode: boolean;
  url: string;
  port: number;
  logs: LogsConfig;
  jwt: JWTConfig;
  temp: string;
  client: string;
};

type LogsConfig = {
  write: boolean;
  path: string;
  fileName: {
    requests: string;
    errors: string;
  };
};

type JWTConfig = {
  secrets: {
    access: string;
    refresh: string;
  };
};

type DatabaseConfig = {
  name: string;
  user: string;
  password: string;
  options: SequelizeOptions;
  path: string;
  assets: DatabaseAssetsConfig;
};

type DatabaseAssetsConfig = {
  images: string;
  logos: string;
  files: string;
};

type Config = {
  server: ServerConfig;
  database: DatabaseConfig;
};

export { Config };
