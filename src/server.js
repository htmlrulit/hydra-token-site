const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cron = require('node-cron');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 5000;
let farmingData = [];

const coin_dict = {
    "hydra": "HYDRA"
};

const pools_dict = {
    "ton": "https://dedust.io/pools/EQBF-YYoDy6ue0J4K-v5L_HYzwWCLpwXSLsTFmT7hr2uqHf5",
    "gram": "https://dedust.io/pools/EQDwdhVnWwTe2NLGzD3LPuzF4dmkTeB48c5pJa1_T4Wdj8I6",
    "usdt": "https://dedust.io/pools/EQC9nz8txyBWaivGSwAm7_cOZMbAZ5r_-nqS54amna8MV8YO",
    "dyor": "https://dedust.io/pools/EQBrqTSUuU2V3G9OicQajJAfjs5peFFzEVUE7KNSqM5S4msw",
    "raff": "https://dedust.io/pools/EQBVsXt3_StTKcSFMlROaq_qNBBbS0YbW6C57iGsGhDXyWk0",
    "scale": "https://dedust.io/pools/EQDMC94VUwu5kzSFJnDusfviU4rAAQ8zu21gnVcpmFwZJhoE",
    "jvt": "https://dedust.io/pools/EQAfiugZwBZXsnG_s4LjlPV5K2kOoRrXqUoGtXHniMkw-Maf",
    "arbuz": "https://dedust.io/pools/EQB0HyQiI7Mjr5Up_diUFHl3cswo7XJ5Tg_bg7i4J8eGy6TF",
    "jusdt": "https://dedust.io/pools/EQBcblzkXZpPHLnag6veT3VWwgS8-a2BpqfC_X67cd5P5v5Q",
    "dhd": "https://dedust.io/pools/EQAzjT6fMLYJA4Ik_EfIbBVybtLNQjDasiRvGSWKMNcipp88",
    "open": "https://dedust.io/pools/EQCFUOIgKk2fIHCX7jPhbE58aUuFZgZbqt95Uekpkz-Z2pcd",
    "tonnel": "https://dedust.io/pools/EQBvTfPCOuswtPAXnSbWsmQ_c0e5P4Vi9g_GJMN4dEN4m9W4",
    "jetton": "https://dedust.io/pools/EQAk3tW6C_iJAllECGWgBJUq8KcJzlUGDhHJNNBJe4ZiECzg",
    "duck": "https://dedust.io/pools/EQAuyB9acB4zoYlyNxzJeIZon717nW0B-pPH4y0mjEMm8xcd",
    "durev": "https://dedust.io/pools/EQCwXU_HjOgkFm0rv4lZeujfyon-acdxnytVpwZBHKzwCq4O",
    "chapa": "https://dedust.io/pools/EQBVRopHlBOTdvhpl6P7OcLpr01H8g2HikHQMZvAPofTv7Ji",
    "pot": "https://dedust.io/pools/EQC11t8iSTqLkJGRoCw3fEr3kpSYZFUeDzch943XKudmIR7K",
    "scam": "https://dedust.io/pools/EQDGP2wFRQ07R_Slypc9otFa75WsAxhPqBcGtnYsVreVTbKF",
    "bolt": "https://dedust.io/pools/EQArsRutttbDzNquQXE8Oj_G7IXDZCcY64wo8cOdx_pSVQv8",
    "stton": "https://dedust.io/pools/EQClE8KkHTLNUVYY_bhauAEtMzvpNiGGpCDJj7RfK3tXmXRX",
    "lky": "https://dedust.io/pools/EQAkQ4uogpAEXUOOugCOLpTG830DkBPOVFwSuRQLjBfGDu2V",
    "glint": "https://dedust.io/pools/EQD0rFgMaAc9sP-N7MZLZ5UuQmCR2DVeN_eN74rGk8w46C6k",
    "dfc": "https://dedust.io/pools/EQAC2d8ABkFd7Uq73VnZTT0WtBEFiUNhbRjiPkxuRjWyNMgw",
    "anon": "https://dedust.io/pools/EQB9ZcGrHmOAMKR-WJWv8NaisoLHZAqyRvgLrExP0H_qPTcN",
    "jwbtc": "https://dedust.io/pools/EQBIMFXLB0120pEkwTHXOGdgurwz1JKvT_OXCyUOdQDJw-qL",
    "ambr": "https://dedust.io/pools/EQDZ_RT78KodX8W087g9hHdop49Y2L87jvGdoHnK9CS4t4ph",
    "redo": "https://dedust.io/pools/EQBApMIfSn-lbZU2wPqKjwTeJDCgeOCQYpb04Eesno6XcO9I",
    "meow": "https://dedust.io/pools/EQCityMzsRZmViViwoTJENNFGyHyRMZ3EX-MHoH7VyZJx5-6",
    "jnano": "https://dedust.io/pools/EQAf9_jKFUNKXfCoGd4_fNiO5hMdo7r9tN4W9IXR-l_9Su2t",
    "mc": "https://dedust.io/pools/EQAMTS73rUuLHVvYhRrO_KGs5ZXlHAqUbNzE31tr9evBvhax",
    "web3": "https://dedust.io/pools/EQDgdYtQWo2Ny3xutweCs2q6OJnLPq0TrKd8zpuiIGBOg3hj",
    "fish": "https://dedust.io/pools/EQDPCOf_SrNzLH_3PxWAaUNr3gokWa3r0NJ1D_D6h0phiaKy",
    "jarbuz": "https://dedust.io/pools/EQCXSwf2ivCy2nACllGVZlz9q-O6ATRzSq1nJrxD1oOx-7NE",
    "sfmt": "https://dedust.io/pools/EQCjW_CidGT5VIpKhDD_pq-HWiwOeKfg2GD7df5J0U0MTv8o",
    "slow": "https://dedust.io/pools/EQClqDLkn13QIR2X_hxrTeLCrkFAiKIsoGMAEH1kRhMsIbmu",
    "kingy": "https://dedust.io/pools/EQBxvNYTNX2_zgKXZPvFc2VR1N9yi4mBU6coOUK-oed1OFtq",
    "inc": "https://dedust.io/pools/EQBzucDo3HDIx4Hg4jkJ4d_1gLto8F70j-K8HJEe5jkmf73V",
    "not": "https://dedust.io/pools/EQBqsDmPc6-lyUtqjo6Lxh3akRKnJcMyYwB7nAPkXCMHezYJ",
    "statham": "https://dedust.io/pools/EQA8FwbNRhmrk5MUWZK6U6ELEUUeYvAtte36PolRPpG_wzqP",
    "mumba": "https://dedust.io/pools/EQCY5M34MKjjEyAO22_3ohRoYShtroZkI_NLaPZmmeymb6cU",
    "stbl": "https://dedust.io/pools/EQAGzo_uY23TFlK4p8P6X6X-VWPsqsTQ7Je1UQcfxAOJKaJP",
    "grbs": "https://dedust.io/pools/EQDTA1SbjBJ2mSYUieUYYO1xZoQ6Bwy0y9j7SwQs3DR3HYEO",
    "proton": "https://dedust.io/pools/EQBaadItQeAxhAgZ6lc1Ng-P6ME1NJS-TgyWBraR0s53fZ2p",
    "monk": "https://dedust.io/pools/EQD4Pnhp5NT70sFX5rg4JVx1LjA09DMGTvQ-BEHrdRp2Ymlx",
    "sheep": "https://dedust.io/pools/EQAokaHDjRJ3tdd92go62WlEe4VO3WJVfiLdPISdF3LJCp8M",
    "sqrl": "https://dedust.io/pools/EQBCEI53ldiGnKcF9c4cbjChWLMOqNPj0ymbFHg1L2Jy1wlC",
    "up": "https://dedust.io/pools/EQBVSvvERlQcaQVDzwQPv_Q18C80alQdHhQHwh0k4JQAPpG6",
    "llama": "https://dedust.io/pools/EQCQstSDCppuh3M13dUOG6kNhsn3hdG7WYqpj_qe4cbNG3Gw",
    "goy": "https://dedust.io/pools/EQDsOixoeE7h_kz4Pca5IG_v_cAT6FpCfy0Dh_NkhMMoXJCa",
    "ship": "https://dedust.io/pools/EQDNIkFxDw9yqcGP_QQEFYooS5z0Vyln6oErSLcYrU8mTbIr",
    "ivs": "https://dedust.io/pools/EQBn98PhFGuZPO9DsopL3fHWpR-6eNt5FCWEU1apIvi3h6Xa",
    "unic": "https://dedust.io/pools/EQAivDJncZHzBN8IbmOIuBtpn035YliUv2vSAE7iy23GOrqf",
    "tnx": "https://dedust.io/pools/EQAMCaN_yY25--8pJ6N6PNvCwBkkCw-kKlBL5hCc6UJIebeP",
    "sau": "https://dedust.io/pools/EQD1llTSAvy6yNdCCvhNCsslIPDqaDPQVDUHedlOUbQxNzTj",
    "goi": "https://dedust.io/pools/EQDWrkvfo9rUbJyshUdvc--KbTeM08aocamDC_F34XMNOQCB",
    "nudes": "https://dedust.io/pools/EQBW6TL46Br73Uc9o8Ype4V1Et_ERjG1inTAV5gznOglfzwC",
    "hton": "https://dedust.io/pools/EQAyOWUEw5Gf7rJjFkBDC387YmADtwVEgsjc7PS4g4kQYzrc",
    "rotgar": "https://dedust.io/pools/EQCG-TMy04vs6Gq9RwdB-rF1qEEEuVcNsswy4xVqCCdqtejP",
    "mrdn": "https://dedust.io/pools/EQA3_-X2uAxFG0s2P4pS03yl3Fu6vKzqiwzI0lNSd_P1kNvK",
    "y": "https://dedust.io/pools/EQBAQ3d-oJT6Lve-R03Ir6nNdWqlyakiEj1HoZ8t_KOFmC-T",
    "cofe": "https://dedust.io/pools/EQDLCkcaunjh1Uz0Y9lt3nZhfad0d-Xps3Ji0d75x-eEz5xp",
    "lave": "https://dedust.io/pools/EQAvd0LF13yOZZslIXHXVQ6zKJHUF05GvRl3K4JUq8bhem6z",
    "stxp": "https://dedust.io/pools/EQC_14_wxL3g-tVNEXprZywf414WYTVV-dcfOQxQpwvpq1B5",
    "plankton": "https://dedust.io/pools/EQDt2xsLTue0qgTjEdGHLPG2zjKnnwp3oqmZXrb5pE17yKit",
};

app.use(cors());

const fetchPoolsData = async () => {
    try {
        const response = await axios.get('https://api.dedust.io/v2/pools');

        const pools = response.data.filter(pool => {
            return pool.assets.some(asset => asset.metadata && asset.metadata.symbol === coin_dict.hydra);
        });

        return pools;
    } catch (error) {
        console.error('Error fetching pools data:', error);
        return [];
    }
};

const fetchAssetsData = async () => {
    try {
        const response = await axios.post('https://api.dedust.io/v3/graphql', {
            query: `
                query GetAssets {
                    assets {
                        address
                        name
                        symbol
                        image
                        decimals
                        price
                    }
                }
            `,
            operationName: "GetAssets"
        }, {
            headers: {
                'Host': 'api.dedust.io',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Origin': 'https://dedust.io',
                'Referer': 'https://dedust.io/',
                'Accept-Language': 'ru,en;q=0.9'
            }
        });

        const assets = response.data.data.assets;
        console.log('Fetched assets data:', assets);

        const assetsMap = {};
        assets.forEach(asset => {
            assetsMap[asset.address] = asset;
        });
        return assetsMap;
    } catch (error) {
        console.error('Error fetching assets data:', error);
        return {};
    }
};

const fetchBoostData = async (poolUrl) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(poolUrl, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
        const elements = document.querySelectorAll('.boost-row__item-text');
        return Array.from(elements).map(element => element.textContent.trim());
    });

    await browser.close();
    return data;
};

const formatLargeNumber = (num) => {
    if (num >= 1e12) {
        return `$${(num / 1e12).toFixed(2)}T`;
    } else if (num >= 1e9) {
        return `$${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
        return `$${(num / 1e6).toFixed(2)}M`;
    } else if (num >= 1e3) {
        return `$${(num / 1e3).toFixed(2)}K`;
    } else {
        return `$${num.toFixed(2)}`;
    }
};

const formatCurrency = (num) => {
    return `$${Number(num).toLocaleString()}`;
};

const formatAPR = (num) => {
    return `${num.toFixed(2)}%`;
};

const calculateAPR = (tvl, fees, boost) => {
    return tvl > 0 ? ((fees / tvl) * 100 * 365 * boost) : 0;
};

const fetchData = async () => {
    const pools = await fetchPoolsData();
    const assetsMap = await fetchAssetsData();

    farmingData = await Promise.all(pools.map(async pool => {
        const assetNames = pool.assets.map(asset => asset.metadata ? asset.metadata.symbol : 'Unknown');
        const assetDetails = pool.assets.map(asset => {
            const address = asset.address;
            return assetsMap[address] ? assetsMap[address] : { decimals: 0, price: 0 };
        });

        const reserves = pool.reserves.map((reserve, index) => {
            const decimal = assetDetails[index].decimals;
            const price = assetDetails[index].price;
            return price > 0 ? parseFloat(reserve) / (10 ** decimal) * price : 0;
        });

        const tvl = reserves.reduce((acc, reserve) => acc + reserve, 0);

        const volume = pool.stats.volume.reduce((acc, v, index) => {
            const decimal = assetDetails[index].decimals;
            const price = assetDetails[index].price;
            return acc + (parseFloat(v) / (10 ** decimal) * price);
        }, 0) / 2;

        const fees = pool.stats.fees.reduce((acc, f, index) => {
            const decimal = assetDetails[index].decimals;
            const price = assetDetails[index].price;
            return acc + (parseFloat(f) / (10 ** decimal) * price);
        }, 0);

        const poolUrl = pools_dict[pool.address];
        const boostData = poolUrl ? await fetchBoostData(poolUrl) : [];
        const boost = boostData.length > 0 ? parseFloat(boostData[0]) : 1;

        const apr = calculateAPR(tvl, fees, boost);

        return {
            pair: assetNames.join(' / '),
            tvl: formatLargeNumber(tvl),
            volume: formatCurrency(volume),
            fees: formatCurrency(fees),
            apr: formatAPR(apr),
            icons: pool.assets.map(asset => asset.metadata ? asset.metadata.image : '')
        };
    }));

    console.log('Processed farming data:', farmingData);
};

// Schedule fetching data every 12 hours
cron.schedule('0 */12 * * *', fetchData);

// Initial data fetch
fetchData();

app.get('/api/farming-info', (req, res) => {
    res.json(farmingData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
