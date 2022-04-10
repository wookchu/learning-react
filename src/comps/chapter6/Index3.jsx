import React from 'react';
import ColorList from './ColorListWithContext';
import AppColorForm from './AddColorFormWithContext';
import ColorProvider from "../../context/ColorProvider";

//AddColorForm + ColorList with Context
function Chapter6Index3() {
  return (
    <>
		<ColorProvider>
			<AppColorForm />
			<ColorList />
		</ColorProvider>
    </>
  );
}

export default Chapter6Index3;
