const URL_BONOS_ARG = 'https://data912.com/live/arg_bonds';

export async function fetchBonosArg() { 
    const response = await fetch(URL_BONOS_ARG);
    const data = await response.json();
    return data;
}