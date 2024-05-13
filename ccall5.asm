; malloc allocate memory sample
mov rax,1024
push rax
malloc
mov m1,rax
pop rdx
push rax
push hello
strcpy
pop rax
pop rax
mov rax,m1
push rax
push hi
strcat
pop rax
pop rax
mov rax,m1
push rax
puts
pop rax
ret
hello: db "hello world..."
hi: db "hi"
output: db ""