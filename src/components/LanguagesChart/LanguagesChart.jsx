import React, { useMemo } from 'react';
import { getColorFromString } from '../../helpers/colorFromString';
import { PieChart } from 'react-minimal-pie-chart';
import { Badge } from 'antd';
import './styles.scss';

const LanguagesChart = ({ languages = [] }) => {
    const chartData = useMemo(() => {
        const filteredLanguages = languages.filter(Boolean);
        const total = filteredLanguages.length;

        const countedLanguagesObject = filteredLanguages.reduce((acc, lang) => ({
            ...acc,
            [lang]: acc[lang] ? acc[lang] + 1 : 1,
        }), {});

        return Object.keys(countedLanguagesObject).map((language) => ({
            title: language,
            value: countedLanguagesObject[language],
            color: getColorFromString(language),
            percentage: parseFloat((countedLanguagesObject[language] * 100 / total).toFixed(2)),
        }));
    }, [languages]);

    return (
        <>
            <PieChart data={chartData} animate viewBoxSize={[150, 150]} center={[75, 75]} />
            <div className="chart-info-container">
                {chartData.map((item) => (
                    <Badge
                        key={item.title}
                        color={item.color}
                        text={`${item.title} ${item.percentage}%`}
                    />
                ))}
            </div>
        </>
    )
}

export default LanguagesChart;
