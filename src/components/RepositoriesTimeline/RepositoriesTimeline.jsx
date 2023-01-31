import React from 'react';
import { Timeline } from 'antd';
import dayjs from 'dayjs';

const RepositoriesTimeline = ({ repositoriesData = [] }) => {
    return (
        <Timeline mode="right">
            {repositoriesData.map((repository) => (
                <Timeline.Item
                    key={repository.name}
                    label={dayjs(repository.updated_at).format('YYYY-MM-DD HH:mm:ss')}
                >
                    <p>
                        <a href={repository.html_url}>{repository.name}</a>
                    </p>
                </Timeline.Item>
            ))}
        </Timeline>
    )
}

export default RepositoriesTimeline;
