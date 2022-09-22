import {
  getRefreshTokenSuccess,
  getRefreshTokenFailure,
} from '@store/actions/Auth-actions';
import { store } from '@store/store';

class HTTPHelper {
  static async fetchAsJson(input, init) {
    try {
      const response = await fetch(input, init);

      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchWithAuth(input, init) {
    try {
      const { headers } = init;
      const headersWithAuth =
        headers != null ? new Headers(headers) : new Headers();

      const token = store.getState().auth.token;

      headersWithAuth.append('Authorization', `Bearer ${token}`);

      const result = await this.fetchAsJson(input, {
        ...init,
        headers: headersWithAuth,
      });

      if (result?.status === 401) {
        const refreshResult = await this.refreshToken();

        if (refreshResult?.status != null) {
          store.dispatch(getRefreshTokenFailure());

          return refreshResult;
        }

        store.dispatch(getRefreshTokenSuccess(refreshResult.access_token));

        headersWithAuth.append(
          'Authorization',
          `Bearer ${refreshResult.access_token}`
        );

        const result = await this.fetchAsJson(input, {
          ...init,
          headers: headersWithAuth,
        });

        return result;
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async refreshToken() {
    return this.fetchAsJson('/api/user/refresh', { method: 'POST' });
  }
}

export { HTTPHelper };
