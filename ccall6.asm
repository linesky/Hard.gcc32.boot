; memfill memset sample
mov rax,1024
push rax
malloc
mov m1,rax
pop rdx
push rax
push 65
push 80
memset
pop rax
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