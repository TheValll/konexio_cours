import pygame

pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()
running = True
player = pygame.image.load('player.png').convert()
dt = 0
color = (255, 0, 0)

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("white")

    pygame.draw.circle(screen, color, player_pos, 40)

    keys = pygame.key.get_pressed()
    if keys[pygame.K_z]:
        player_pos.y -= 300 * dt
    if keys[pygame.K_s]:
        player_pos.y += 300 * dt
    if keys[pygame.K_q]:
        player_pos.x -= 300 * dt
    if keys[pygame.K_d]:
        player_pos.x += 300 * dt
    if keys[pygame.K_SPACE]:
        if color == (255, 0, 0):
            color = (0, 255, 0)
        else:
            color = (255, 0, 0)

    pygame.display.flip()
    dt = clock.tick(60) / 1000

pygame.quit()