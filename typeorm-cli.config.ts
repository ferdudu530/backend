import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'pass456',
  database: 'postgres',
  entities: [],
});
