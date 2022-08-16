function numericConverter(value) {
    return {
        binary: value.toString(2),
        octal: value.toString(8),
        hexa: value.toString(16)
    }
}

export default numericConverter;