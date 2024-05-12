mov rax,0
mov rcx,4
for1:
inc rax
dec rcx
cmp rcx,0
jnz for1
mov rbx,rax
mov rcx,rax
mov rdx,rax
ret 