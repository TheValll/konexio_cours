import json

def est_nombre(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

with open('aeroports.json', 'r') as f:
    data = json.load(f)

# Filtrer les données
nouvelles_donnees = [ligne for ligne in data if est_nombre(ligne[2]) and est_nombre(ligne[3])]

# Écrire les nouvelles données dans un nouveau fichier JSON
with open('new_data.json', 'w') as f:
    json.dump(nouvelles_donnees, f, indent=2)
