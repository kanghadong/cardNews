import React from 'react';
import {compose} from 'redux';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Progress from '../Progress/Progress';
import styles from './styles';

const TitlebarGridList = (props) => {
    const { classes, articles, isShowProgress, width } = props;

    const getGridListCols = () => {
        if (isWidthDown('xs', width)) {
            return 1;
        } else if (isWidthDown('lg', width)) {
            return 2;
        } else {
            return 4;
        }
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} spacing={15} className={classes.gridList} cols={getGridListCols()}>
                {articles.map((item, index) => (
                    <GridListTile key={index}>
                        <img src={item.urlToImage} alt={item.title} />
                        <GridListTileBar
                            title={item.title}
                            subtitle={<span>{item.source.name} / {item.author}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
            {isShowProgress ? <Progress /> : null}
        </div>
    );
}

export default compose(
    withStyles(styles),
    withWidth()
)(TitlebarGridList);
