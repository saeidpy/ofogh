import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom';

import { readAllAdApi } from '../../Api/Ad.js';
import { GET_ADS, USER_AUTH } from '../../Consistent/consistent.js';
import fa from '../../Consistent/fa.js';
import { useUserState } from '../../Context/UserContext.js';
import { useCustomQuery } from '../../Hooks/useCustomQuery.js';
import { getLocalStorage } from '../../Utils/utils.js';
import AdCardComponent from '../AdCard/AdCardComponent.js';
import { useStyle } from './InfiniteList.style.js';

export default function InfiniteListComponent(props) {
  const classes = useStyle();
  const history = useHistory();
  const [adsList, setAdsList] = useState([]);
  const { isSearch } = useUserState();
  const openDialog = (id) => {
    history.push("/ad/" + id);
  };

  const { isFetching, data } = useCustomQuery(GET_ADS, readAllAdApi, {
    enabled: !isSearch,
  });

  useEffect(() => {
    setAdsList(
      data
        ? data?.filter(
            (item) => item.userId === getLocalStorage(USER_AUTH)?.user.id
          )
        : []
    );
  }, [data]);

  return (
    <InfiniteScroll
      dataLength={adsList.length}
      next={() => {}}
      hasMore={false}
      loader={<h4>Loading...</h4>}
      className={classes.root}
    >
      {adsList?.length ? (
        adsList.map((item, index) => (
          <AdCardComponent
            {...item}
            onClick={openDialog}
            loading={isFetching}
          />
        ))
      ) : (
        <div className={classes.notExist}>
          <img alt="folder" width="20%" src="/Assets/img/folder.png" />
          <Typography>{fa.ad.notExist}</Typography>
        </div>
      )}
    </InfiniteScroll>
  );
}
