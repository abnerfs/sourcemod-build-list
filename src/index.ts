import fetch from 'node-fetch'
import { JSDOM } from 'jsdom';
import express from 'express';
const PORT = process.env.PORT || 9323;
const app = express();

const getBuilds = async () => {
    const response = await fetch('https://www.sourcemod.net/downloads.php')
        .then(res => res.text());

    const { window } = new JSDOM(response);
    const tbody = window.document.querySelector('#txt > div > table > tbody');
    const rows = [...tbody!.querySelectorAll('tr')!];
    rows.shift();

    return rows.map(row => {
        const [buildEl, windowsDownloadEl, linuxDownloadEl, _macDownloadEl, detailsEl] = [...row.querySelectorAll('td')!];
        const build = buildEl.textContent;
        const windowsLink = windowsDownloadEl.querySelector('a')!.href;
        const linuxLink = linuxDownloadEl.querySelector('a')!.href;
        const details = detailsEl!.textContent;
        const commit = detailsEl!.querySelector('a')!.href;

        return {
            build,
            windowsLink,
            linuxLink,
            details,
            commit
        }
    });
}

app.get('/api/sourcemod/builds', async (_req, res) => {
    const builds = await getBuilds();
    res.json(builds);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})