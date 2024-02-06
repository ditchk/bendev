import PackageSelect from "./PackageSelect"

const PackagesSect = () => {
  return (
    <div className="m-2">
        <h2 className="BoxText font-bold mb-4">Choose a Package</h2>
        <div>
            <PackageSelect />
        </div>
    </div>
  )
}

export default PackagesSect