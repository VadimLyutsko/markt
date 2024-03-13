export const getData = async () => {
  let res;
  try {
    res = await (await fetch('https://www.cbr-xml-daily.ru/daily_json.js', { next: { revalidate: 3600 } })).json();
  } catch (error) {
    console.error(error);
  }
  return res;
};
