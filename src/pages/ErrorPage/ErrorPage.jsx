import React from 'react';
import CenteredCard from '../../components/CenteredCard/CenteredCard';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const ErrorPage = ({ title, text }) => {
    return (
        <CenteredCard bordered={false} title={title}>
            <Result
                status="warning"
                title={text}
                extra={
                    <Link to="/">
                        <Button type="primary">
                            Go home
                        </Button>
                    </Link>
                }
            />
        </CenteredCard>
    );
}

export default ErrorPage;
