import {types} from 'mobx-state-tree';

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo();

const timeHelper = types
  .model({
    updatedAt: types.maybe(types.string),
  })
  .actions((self) => ({
    saveUpdatedDate() {
      self.updatedAt = new Date().toISOString();
    },
  }))
  .views((self) => ({
    get timeSinceCreated() {
      const addedAt = Date.parse(self.createdAt);
      return timeAgo.format(addedAt);
    },
  }));

export {timeHelper};

/* trial seconds apart */

/*

id: "152",
createdAt: "2021-02-11T19:32:21.876Z",
Date (your time zone)	Feb 11, 2021, 11:32:21 AM

id: "153"
createdAt: "2021-02-11T10:26:23.191Z",
Date (your time zone)	Feb 11, 2021, 2:26:23 AM


id: "154",
createdAt: "2021-02-11T03:39:54.995Z",
Date (your time zone)	Feb 10, 2021, 7:39:54 PM


*/
