import React from 'react';
import { Form, Button, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import CenteredCard from '../../components/CenteredCard/CenteredCard';

const { Item: FormItem } = Form;

const Home = () => {
    const navigate = useNavigate();

    return (
        <CenteredCard title="My GitHub Resume" bordered={false}>
            <h4>This is my test task in the Koitechs company</h4>
            <p>
                In the field below you can enter your username that you use on github
                and by clicking on the submit button you will receive information about your account:
            </p>
            <Form
                layout="vertical"
                onFinish={({ username }) => navigate(username)}
                autoComplete="off"
            >
                <FormItem
                    name="username"
                    rules={[{ required: true, message: 'Please input your github username' }]}
                >
                    <Input placeholder="Input your github username" />
                </FormItem>
                <p>
                    See most popular users: <Link to="/mrdzugan">Andrey Dzugan</Link> or <Link to="/mxcl">Max Howell</Link>
                </p>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        </CenteredCard>
    );
}

export default Home;
