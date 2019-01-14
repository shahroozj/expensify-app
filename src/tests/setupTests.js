import Enzyme from 'enzyme';
import Adapter from 'enzyme-Adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ 
    path: '.env.test'
});

Enzyme.configure({
    adapter: new Adapter()
});

