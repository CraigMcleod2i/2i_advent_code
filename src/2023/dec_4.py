def lzw_compress(data):
    dictionary = {chr(i): i for i in range(256)}
    next_code = 256
    result = []
    current_code = ord(data[0])

    for char in data[1:]:
        current_code = (current_code << 8) + ord(char)
        if chr(current_code) not in dictionary:
            result.append(current_code)
            dictionary[chr(current_code)] = next_code
            next_code += 1
            current_code = ord(char)

    result.append(current_code)
    return result

# Example usage:
input_data = "ABABABA"
compressed_data = lzw_compress(input_data)
print(compressed_data)