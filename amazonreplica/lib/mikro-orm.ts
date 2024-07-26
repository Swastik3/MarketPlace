import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config';

class OrmWrapper {
  private static instance: MikroORM;

  static async getInstance(): Promise<MikroORM> {
    if (!OrmWrapper.instance) {
      OrmWrapper.instance = await MikroORM.init(config);
    }
    return OrmWrapper.instance;
  }
}

export default OrmWrapper;