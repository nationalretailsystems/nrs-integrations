export function sanitizeValues(input: any, sv: any = {}) {
    for (let path in sv) {
        if (path.charAt(0) === '*') {
            let length = Number(path.substr(1)) || 0;
            input = input ?? [];
            if (Array.isArray(input)) {
                while (input.length < length) {
                    input.push(_getEmptyType(sv[path]));
                }
            }
            for (let key in input) {
                input[key] = sanitizeValues(input[key], sv[path]);
            }
            break;
        } else if (typeof sv[path] === 'object') {
            input[path] = sanitizeValues(input[path] || {}, sv[path]);
        } else {
            input[path] = input[path] ?? sv[path];
        }
    }
    return input;
}

function _getEmptyType(svSpec: any) {
    if (typeof svSpec === 'object') {
        for (let key in svSpec) {
            if (key.charAt(0) === '*') {
                return [];
            }
        }
        return {};
    } else {
        return svSpec;
    }
}
