# kdf-remi-lazarevski

Premier écran contiendra un formulaire d'identification nécessitant que les utilisateurs possédent un email @supplynation.com => création d'une fonction js qui s'assure que la partie de l'adresse email après l'arobase soit @supplynation.com

Deuxième écran dédié à la saise de commandes permet de saisir la commande :
- création d'un formulaire de commande qui contiendra une ligne pour chaque produit et une select box (création d'une fonction limitant la saisie à 20 caractères). 
- création d'une fonction associant la commande au client 
- Validation de la commande et enregistrement en localStorage.
Cela va nécessiter la création d'un state Commande qui contiendra chaque commande et devra être stocké dans le localStorage.
Chaque commande sera un objet dont les propriétés seront 

Troisième écran : consultation des commandes saisies. Nécessitera de créer une fonction permettant de restituer le state commande.