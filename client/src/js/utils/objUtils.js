/**
 * object 工具类
 */

export default class objUtils {

    /**
     * 合并多个object
     * @returns {*}
     */
    static mergeObj() {
        if (!arguments.length) return;

        let tempObj = Object.assign.apply(null, arguments)

        return tempObj;
    }
}