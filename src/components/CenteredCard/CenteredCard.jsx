import React from 'react';
import { Card } from 'antd';
import './styles.scss';

const CenteredCard = ({ children, ...props }) => {
    return (
        <div className="card-container">
            <Card className="card-container__card" {...props}>
                {children}
            </Card>
        </div>
    )
}

export default CenteredCard;
