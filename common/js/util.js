import { HOUSE_STATUS } from "common/js/config"

const COLOR_MAP = {
	green: { color: '#4cd961', bg: 'rgba(76, 217, 97,0.2)' },
	blue: { color: '#4985c9', bg: 'rgba(73, 133, 201,0.2)' } ,
	gray: { color: '#999999', bg: 'rgba(153, 153, 153,0.2)' } ,
	red: { color: '#e64340', bg: 'rgba(230, 67, 64,0.2)' } ,
}

export const concatLabels = (saleStatus, tag) => {
    let ret = tag && tag.split(',') || [],
        { green, gray } = COLOR_MAP

    ret = ret.map(item => {
        return { 
            color: gray.color, 
            title: item, 
            bg: gray.bg 
        }
    })
    
    ret.unshift({ 
        title: HOUSE_STATUS[ saleStatus ], 
        color: green.color, 
        bg: green.bg 
    })
    return ret
}

export const getFormatDate = function(time, format) {
    var t = new Date(time);
    var tf = function(i) {
        return (i < 10 ? "0" : "") + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case "yyyy":
                return tf(t.getFullYear());
                break;
            case "MM":
                return tf(t.getMonth() + 1);
                break;
            case "mm":
                return tf(t.getMinutes());
                break;
            case "dd":
                return tf(t.getDate());
                break;
            case "HH":
                return tf(t.getHours());
                break;
            case "ss":
                return tf(t.getSeconds());
                break;
        }
    });
};