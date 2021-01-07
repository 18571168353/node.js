// 定义格式化时间的方法
function dataFormat(dtStr) {
	const dt = new Date(dtStr)
	const y = dt.getFullYear()
	const m = padZerp(dt.getMonth() + 1)
	const d = padZerp(dt.getDate())
	const hh = padZerp(dt.getHours())
	const mm = padZerp(dt.getMinutes())
	const ss = padZerp(dt.getSeconds())
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZerp(n) {
	return n > 9 ? n : '0' + n
}
module.exports = {
	dataFormat
}
