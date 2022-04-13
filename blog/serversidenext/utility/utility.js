

const blogs = {
    0: {
        title: "And Then There Was Denver", 
	route: '/blog/thendenver', 
	top: true
    },
    1: {
        title: 'My Own Website',
	route: '/blog/ownwebsite'
    },
    2: {
        title: 'Driving Places',
        route: '/blog/drivingplaces'
    },
    3: {
        title: 'Freedom & Discourse', 
        route: '/blog/freedomdiscourse', 
    },
    4: {
        title: 'Remaking The Remade Wheel', 
        route: '/blog/remakingremadewheel', 
    },
    5: {
        title: 'Wish You Were Her', 
        route: '/blog/wishyouwereher', 
    },
    6: {
        title: 'Weird & Wonderful', 
        route: '/blog/weirdwonderful', 
    }
}

async function postData(url, data){
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)
  });
  return response.json();
}

async function getData(url){
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json();
}

export {blogs, postData, getData}
