mov rax,10
mov rbx,11
cmp rax,rbx
jg grt
cmp rax,rbx
jl ggl
jmp likes
grt:
push grts
puts
pop rax
ret 
ggl:
push ggls
puts
pop rax
ret
likes:
push likkes
puts
pop rax
ret
grts: db "rax is big of rbx"
ggls: db "rax is less of rbx"
likkes: db "rax is like of rbx"