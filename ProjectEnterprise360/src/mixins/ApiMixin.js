export default {
    data: () => ({
        data: {},
    }),
    methods: {
        getData(url, queryParams = {}) {
            Object.keys(queryParams).forEach(key => {
                if (queryParams[key] === '') delete queryParams[key];
            })

            const urlQueryParams = new URLSearchParams(queryParams).toString()

            let urlFull = urlQueryParams ? `${url}&${urlQueryParams}` : url

            fetch(urlFull)
                .then(res => { return res.json(); })
                .then(data => {
                    this.data = data;
                })
        }
    }
}