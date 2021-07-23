export const formatNumber = number => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

const importAll = r => {
    let out = {};
    r.keys().forEach(k => {
        out[k] = r(k).default;
    });
    return out;
}

export const images = importAll(require.context('../img/', false, /\.(png|jpe?g|svg)$/));
