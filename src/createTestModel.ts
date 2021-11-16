import { createMachine } from 'xstate';
import { createModel } from "@xstate/test";

function addTests(state: any, tests: any) {
  return {
    ...state,
    states: Object.entries(state.states).reduce((s, [stateKey, stateValue]: [any, any]) => {
      return {
        ...s,
        [stateKey]: {
          ...stateValue,
          meta: {
            ...stateValue.meta,
            test: tests[stateKey]
          }
        }
      };
    }, {})
  };
}
export const createTestModel = (machine: any, stateTests: any, eventTests: any) => {
  const modelMachine = createMachine(addTests(machine, stateTests));
  const model = createModel(modelMachine, { events: eventTests });
  return model;
};
