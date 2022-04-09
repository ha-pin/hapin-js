import { transformHapinToArabic } from "../src/transformHapinToArabic"

test("Test TransformToArabic", () => {
	const res = transformHapinToArabic("syelxam")
	expect(res).toEqual("سەلام")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("jaqse")
    expect(res).toEqual("جاقسى")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("bxer")
    expect(res).toEqual("ٴبىر")
})