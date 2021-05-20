export const getValue = ({ amount, currency, decimals }) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency,
        minimumFractionDigits: decimals
    });

    return formatter.format(amount);
};
