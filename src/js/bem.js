export default {

    set: (b, e, m) => {
        let cname = b;

        if (e) cname += `__${e}`;
        if (m) cname += `--${m}`;

        return cname;
    }

};