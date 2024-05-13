; strcpy string copy sample
push hello
push output
strcpy
pop eax
pop eax
push output
puts
pop eax
ret
hello: db "hello world..."
output: db "