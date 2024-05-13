; strcat string cat sample
push output
push hello
strcpy
pop rax
pop rax
push output
push hi
strcat
pop rax
pop rax
push output
puts
pop rax
ret
hello: db "hello world..."
hi: db "hi"
output: db "