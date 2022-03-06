// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UntitledModel, Todo } = initSchema(schema);

export {
  UntitledModel,
  Todo
};