const c = (value) => console.log(value);

const query = (query) => {
    const q = document.querySelectorAll(query);
    return q.length <= 1 ? q[0] : q;
};

const tally = (data) =>
    Array.from(data)
        .map(() => 1)
        .reduce((tally, count) => tally + count);

export { c, query, tally };
