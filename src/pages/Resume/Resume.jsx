import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useGetQuery from '../../api/useGetQuery';
import { Descriptions, Grid } from 'antd';
import CenteredCard from '../../components/CenteredCard/CenteredCard';
import dayjs from 'dayjs';
import LanguagesChart from '../../components/LanguagesChart/LanguagesChart';
import RepositoriesTimeline from '../../components/RepositoriesTimeline/RepositoriesTimeline';

const { useBreakpoint } = Grid;

const Resume = () => {
    const { username } = useParams();
    const { xs: isMobileScreen } = useBreakpoint();

    const { data: userData = {}, loading: userLoading, error: userError } = useGetQuery(`users/${username}`);
    const {
        data: repositoriesData = [],
        loading: repositoriesLoading,
        error: repositoriesError
    } = useGetQuery(`users/${username}/repos`);

    const lastUpdatedRepositories = useMemo(
        () => repositoriesData.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 10),
        [repositoriesData]
    );

    const languagesData = useMemo(
        () => repositoriesData.map((repositoryInfo) => repositoryInfo.language),
        [repositoriesData]
    );

    if (userLoading || repositoriesLoading) {
        return <span>Loading...</span>
    }

    if (userError || repositoriesError) {
        return JSON.stringify(userError || repositoriesError);
    }

    return (
        <CenteredCard bordered={false} title={username.toUpperCase()} style={{ width: 700 }}>
            <Descriptions
                bordered
                column={1}
                title={userData.name}
                layout={isMobileScreen ? 'vertical' : 'horizontal'}
                labelStyle={{ width: '30%' }}
            >
                <Descriptions.Item label="Public repositories">{userData.public_repos}</Descriptions.Item>
                <Descriptions.Item label="On GitHub since">
                    {dayjs(userData.created_at).format('MMMM D, YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label="Programming languages">
                    <LanguagesChart languages={languagesData} />
                </Descriptions.Item>
                <Descriptions.Item label="Recently edited public repositories">
                    <RepositoriesTimeline repositoriesData={lastUpdatedRepositories} />
                </Descriptions.Item>
            </Descriptions>
        </CenteredCard>
    );
}

export default Resume;
