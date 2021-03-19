import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AnniversaryImage = ({ kind }) => {
  const classes = useStyles();
  let path = '';
  switch (kind) {
    case '誕生日':
      path = 'https://testimageippei.s3-ap-northeast-1.amazonaws.com/001-birthday.jpg';
      break;
    case '記念日':
      path = 'https://cdn.pixabay.com/photo/2015/07/15/11/49/fireworks-846063_960_720.jpg';
      break;
    case '出産祝い':
      path = 'https://cdn.pixabay.com/photo/2016/07/24/13/03/baby-1538338_960_720.jpg';
      break;
    case '結婚祝い':
      path = 'https://cdn.pixabay.com/photo/2018/01/09/22/51/rose-3072698_960_720.jpg';
      break;
    case '結婚記念日':
      path = 'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg';
      break;
    case '就職祝い':
      path = 'https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg';
      break;
    case '退職祝い':
      path = 'https://cdn.pixabay.com/photo/2021/01/04/09/29/sign-5886933_960_720.jpg';
      break;
    case '入学祝い':
      path = 'https://cdn.pixabay.com/photo/2016/03/18/15/45/cherry-blossoms-1265247_960_720.jpg';
      break;
    case '卒業祝い':
      path = 'https://cdn.pixabay.com/photo/2015/08/08/00/07/graduation-879941_960_720.jpg';
      break;
  }
  return (
    <Avatar className={classes.large} src={path} />
  )
}

export default AnniversaryImage;