import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const ContinuousCollisionDetectionExample = () => {
  const view1Ref = useRef(null);
  const view2Ref = useRef(null);

  const checkCollision = () => {
    if (!view1Ref.current || !view2Ref.current) return false;

    const view1 = view1Ref.current;
    const view2 = view2Ref.current;

    const view1Layout = { x: 0, y: 0, width: 0, height: 0 };
    const view2Layout = { x: 0, y: 0, width: 0, height: 0 };

    view1.measure((x1, y1, width1, height1, pageX1, pageY1) => {
      view1Layout.x = pageX1;
      view1Layout.y = pageY1;
      view1Layout.width = width1;
      view1Layout.height = height1;
    });

    view2.measure((x2, y2, width2, height2, pageX2, pageY2) => {
      view2Layout.x = pageX2;
      view2Layout.y = pageY2;
      view2Layout.width = width2;
      view2Layout.height = height2;

      // Check for collision
      const collisionDetected =
        view1Layout.x < view2Layout.x + view2Layout.width &&
        view1Layout.x + view1Layout.width > view2Layout.x &&
        view1Layout.y < view2Layout.y + view2Layout.height &&
        view1Layout.y + view1Layout.height > view2Layout.y;

      if (collisionDetected) {
        console.log("Collision detected!");
        // Perform actions on collision...
      }
    });
  };

  useEffect(() => {
    const collisionInterval = setInterval(checkCollision, 100); // Vérifier la collision toutes les 100 millisecondes

    return () => {
      clearInterval(collisionInterval); // Nettoyage de l'intervalle lors de la désactivation du composant
    };
  }, []); // Le tableau vide [] assure que cet effet n'est exécuté qu'une seule fois

  return (
    <View style={styles.container}>
      <View ref={view1Ref} style={[styles.view, { backgroundColor: "blue" }]} />
      <View
        ref={view2Ref}
        style={[styles.view, { backgroundColor: "red", marginTop: 100 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    width: 100,
    height: 100,
  },
});

export default ContinuousCollisionDetectionExample;
