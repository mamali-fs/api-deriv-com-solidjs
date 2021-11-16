import { render, cleanup } from 'solid-testing-library';
// import App from './App';
import { appTestsModel } from './derivTestModels';

const testPlans = appTestsModel.getShortestPathPlans();
testPlans.forEach((plan: { description: string | number | Function | jest.FunctionLike; paths: any[]; }) => {
    describe(plan.description, () => {
        afterEach(cleanup);
        plan.paths.forEach(path => {
            it(path.description, () => {
                render(() => <div />);
                return path.test();
            });
        });
    });
});
