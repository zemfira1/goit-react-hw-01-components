
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../assistants';

import { Statistic, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Statistic>
            {title &&  <Title>{ title }</Title>}

            <StatList>
                {
                    stats.map(stat => (
                        <Item style={{backgroundColor : getRandomHexColor()}} key={stat.id}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage} %</Percentage>
                        </Item>
                    ))
                } 
            </StatList>
        </Statistic>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

