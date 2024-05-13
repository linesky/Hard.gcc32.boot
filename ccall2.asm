; strcpy string copy sample
push output
push hello
strcpy
pop eax
pop eax
push output
puts
pop eax
ret
hello: db "hello world..."
output: db "