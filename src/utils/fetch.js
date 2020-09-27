import data from './Webdev_data2.json';

export default function fetchItemData()  {
  return new Promise((response) => {
    setTimeout(() => response(data), 2000)
  }) ;
}
