import { DataProvider, HttpError } from '@refinedev/core';
import axios from 'axios';
import { Prisma } from 'database';
import { stringify } from 'query-string';

type PostParams = {
  take?: number;
  skip?: number;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
};

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const dataProvider = (apiUrl: string): DataProvider => ({
  async getList({ pagination, resource }) {
    const url = `${apiUrl}/${resource}`;

    const { current = 1, pageSize = 10 } = pagination ?? {};

    type Params =
      | ({
          skip?: number;
          take?: number;
        } & {
          where?: Prisma.PostWhereInput;
          orderBy?: Prisma.PostOrderByWithRelationInput;
        })
      | {
          where?: Prisma.UserWhereInput;
          orderBy?: Prisma.UserOrderByWithRelationInput;
        };

    const query: {
      take?: number;
      skip?: number;
    } = {
      take: (current - 1) * pageSize,
      skip: current * pageSize,
    };

    const { data, headers } = await axiosInstance.get(
      `${url}/${resource}${stringify(query)}`
    );

    const total = +headers['x-total-count'];

    return {
      data,
      total,
    };
  },
});
