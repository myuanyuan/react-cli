  // 格式化时间
  const dateFormatTo = (date, format) => {
    const tf = i => (i < 10 ? '0' : '') + i;
    let that;
    typeof date === 'object' ? (that = date) : (that = new Date(date));
    return format.replace(/yyyy|MM|dd|HH|mm/g, (a) => {
      switch (a) {
        case 'yyyy':
          return tf(that.getFullYear());
        case 'MM':
          return tf(that.getMonth() + 1);
        case 'mm':
          return tf(that.getMinutes());
        case 'dd':
          return tf(that.getDate());
        case 'HH':
          return tf(that.getHours());
      }
    });
  };
const objectValues=(obj)=>{
    let temp=[];
    for(let i in obj){
        temp.push(obj[i]);
    }
    return temp;
};
const objectKeys=(obj)=>{
    let temp=[];
    for(let i in obj){
        temp.push(i);
    }
    return temp;
}
// 气象容错--传入 averageOfWeatherValues[]
const averageOfWeatherValues = (weatherValues) => {
    let temperature= 0;
    let apcp = 0;
    let humidity = 0;
    let windSpeed = 0;
    let maxTemperature = 0;
    let minTemperature = 0;
    let date = new Date("1970-01-01");

    let numTotal = weatherValues.length;

    let numTemperature = numTotal;
    let numApcp = numTotal;
    let numHumidity = numTotal;
    let numWindSpeed = numTotal;
    let numMaxTemp = numTotal;
    let numMinTemp = numTotal;

    for (let weatherValue of weatherValues) { // 求均值并滤掉 NAN 情况下的数据
      if (isNaN(weatherValue.temperature)) {
        numTemperature--;
      } else {
        temperature += weatherValue.temperature;
      }

      if (isNaN(weatherValue.apcp)) {
        numApcp--;
      } else {
        apcp += weatherValue.apcp;
      }

      if (isNaN(weatherValue.humidity)) {
        numHumidity--;
      } else {
        humidity += weatherValue.humidity;
      }

      if (isNaN(weatherValue.windSpeed)) {
        numWindSpeed--;
      } else {
        windSpeed += weatherValue.windSpeed;
      }

      if (isNaN(weatherValue.minTemperature)) {
        numMinTemp--;
      } else {
        minTemperature += weatherValue.minTemperature;
      }

      if (isNaN(weatherValue.maxTemperature)) {
        numMaxTemp--;
      } else {
        maxTemperature += weatherValue.maxTemperature;
      }
    }

    return {
      temperature: temperature / numTemperature,
      apcp: apcp / numApcp,
      humidity: humidity / numHumidity,
      windSpeed: windSpeed / numWindSpeed,
      maxTemperature: maxTemperature / numMaxTemp,
      minTemperature: minTemperature / numMinTemp,
      date: date
    };
  }
  const getZeroTime = (rdate) => {
    const date = new Date(rdate);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const timestamp = date.getTime();
    const unix_timestamp = Math.floor(date.getTime() / 1000);
    return timestamp;
  }
  // 校验字符
  const isValid = (str) => {
  let result = true;
  let regs = [
    /alert.*/i,
    /%3Cscript.*/i,
    /<script.*/i,
    /location=http*/i,
    /.source+/i,
    /ale/i,
    /<script>/i,
    /<\/script>/i,
    /eval\(/i,
    /[\'|\&|\<|\>]/i,
    /%27%20*[+]%20*or|and%20*[+]%20*%27/i,
    /%27%20*[+]%20*[%7C][%7C]%20*[+]%20*%27/i
  ];

  for (let i = 0, len = regs.length; i < len; i++) {
    if (regs[i].test(str)) {
      return false;
    }
  }
  return result;
};

export default{
  dateFormatTo,
  objectValues,
  objectKeys,
  averageOfWeatherValues,
  getZeroTime,
  isValid,
}