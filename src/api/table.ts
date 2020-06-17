import { get } from '@/api/serve';

export const getList = (data: num) => get('/article/list', data);
